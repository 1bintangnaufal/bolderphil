package main

import (
	"context"
	"fmt"
	"html/template"
	"net/http"
	"personal-web/connection"
	"strconv"
	"time"
	
	"github.com/labstack/echo/v4"
)

type projectCards struct {
	ID                        int
	Image                     string
	ProjectNameDisplay        string
	ProjectDescriptionDisplay string
	Duration                  string
	StartDate                 string
	EndDate                   string
	ReactIcon                 string
	JsIcon                    string
	NodeIcon                  string
	SocketIcon                string
}

var projectCardValues = []projectCards{
	{
		ProjectNameDisplay:        "Latest Mobile App",
		StartDate:                 "January 31 2023",
		EndDate:                   "March 23 2023",
		Duration:                  "2 Months",
		ProjectDescriptionDisplay: "Pusing kepala pecah. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis impedit perspiciatis perferendis dolore necessitatibus alias amet libero voluptate. Cumque, possimus unde. Iure nemo dicta ratione nesciunt! Cupiditate architecto facilis earum ad deleniti, deserunt laboriosam, minima qui voluptate nam dolore totam eum error quod nemo accusamus sit obcaecati facere alias impedit veniam. Praesentium quas maxime ad impedit distinctio! Assumenda aspernatur iusto corrupti, quibusdam sequi inventore sint nisi accusantium obcaecati ad, sed provident repellat ullam ipsam excepturi odio distinctio fugit in illum dolorem? In quasi blanditiis doloremque, commodi ratione et praesentium iste modi. Recusandae autem voluptas, non saepe cumque dolorem vel!",
		JsIcon:                    "Javascript",
		NodeIcon:                  "Node Js",
	},
	{
		ProjectNameDisplay:        "Latest Web App",
		StartDate:                 "December 1 2022",
		EndDate:                   "February 2 2023",
		Duration:                  "2 Months",
		ProjectDescriptionDisplay: "Wow, kasihan otak saya",
		ReactIcon:                 "React Js",
		SocketIcon:                "Socket IO",
	},
}

func main() {

	connection.DatabaseConnect()

	e := echo.New()

	e.Static("/public", "public")

	// ini namanya routing
	e.GET("/", home)
	e.GET("/get-in-touch", getInTouch)
	e.GET("/add-a-new-project", addANewProject)
	e.POST("/add-a-new-project", submitNewProject)
	e.GET("/project-detail/:id", projectDetail)
	e.GET("/edit-project/:id", editProject)
	e.POST("/edit-project/:id", submitEditedProject)
	e.GET("/deleteProject/:id", deleteProject)

	e.Logger.Fatal(e.Start("localhost:5000"))
}

func home(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/index.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
		//ini untuk menampilkan error saat dijalankan di browser, melainkan terminal
	}

	databaseData, _ := connection.Conn.Query(context.Background(), "SELECT id, image, projectnamedisplay, projectdescriptiondisplay, duration FROM tb_project")

	var result []projectCards

	for databaseData.Next() {
		var each = projectCards{}

		err := databaseData.Scan(&each.ID, &each.Image, &each.ProjectNameDisplay, &each.ProjectDescriptionDisplay, &each.Duration)
		if err != nil {
			fmt.Println(err.Error())
			return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
		}

		result = append(result, each)
	}

	fmt.Println(result)

	data := map[string]interface{}{
		"dataValues": result,
	}

	return tmpl.Execute(c.Response(), data)
}

func getInTouch(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/get-in-touch.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func addANewProject(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/add-a-new-project.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func projectDetail(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/project-detail.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	id, _ := strconv.Atoi(c.Param("id")) // convert string to integer

	var projectDetailValues = projectCards{}

	for index, data := range projectCardValues {
		if id == index {
			projectDetailValues = projectCards{
				ProjectNameDisplay:        data.ProjectNameDisplay,
				StartDate:                 data.StartDate,
				EndDate:                   data.EndDate,
				Duration:                  data.Duration,
				ProjectDescriptionDisplay: data.ProjectDescriptionDisplay,
				ReactIcon:                 data.ReactIcon,
				JsIcon:                    data.JsIcon,
				NodeIcon:                  data.NodeIcon,
				SocketIcon:                data.SocketIcon,
			}
		}
	}

	data := map[string]interface{}{
		"projectDetail": projectDetailValues,
	}

	return tmpl.Execute(c.Response(), data)
}

func submitNewProject(c echo.Context) error {

	var startDateForm, endDateForm string
	var monthRemainder, dayRemainder int

	startDateForm = c.FormValue("startDate")
	endDateForm = c.FormValue("endDate")

	startDateParse, _ := time.Parse("2006-01-02", startDateForm)
	endDateParse, _ := time.Parse("2006-01-02", endDateForm)

	startDateFormat := startDateParse.Format("Jan 02, 2006")
	endDateFormat := endDateParse.Format("Jan 02, 2006")

	dayRemainder = int(endDateParse.Sub(startDateParse).Hours() / 24)
	if dayRemainder >= 30 {
		monthRemainder = dayRemainder / 30
		monthRemainderValue := strconv.Itoa(monthRemainder)
		submitProjectCards := projectCards{
			ProjectNameDisplay:        c.FormValue("projectNameDisplay"),
			ProjectDescriptionDisplay: c.FormValue("projectDescriptionDisplay"),
			Duration:                  monthRemainderValue + " months",
			StartDate:                 startDateFormat,
			EndDate:                   endDateFormat,
			ReactIcon:                 c.FormValue("ReactJs"),
			JsIcon:                    c.FormValue("Javascript"),
			NodeIcon:                  c.FormValue("NodeJs"),
			SocketIcon:                c.FormValue("SocketIO"),
		}
		projectCardValues = append(projectCardValues, submitProjectCards)
	} else {
		dayRemainderValue := strconv.Itoa(dayRemainder)
		submitProjectCards := projectCards{
			ProjectNameDisplay:        c.FormValue("projectNameDisplay"),
			ProjectDescriptionDisplay: c.FormValue("projectDescriptionDisplay"),
			Duration:                  dayRemainderValue + " days",
			StartDate:                 startDateFormat,
			EndDate:                   endDateFormat,
			ReactIcon:                 c.FormValue("ReactJs"),
			JsIcon:                    c.FormValue("Javascript"),
			NodeIcon:                  c.FormValue("NodeJs"),
			SocketIcon:                c.FormValue("SocketIO"),
		}
		projectCardValues = append(projectCardValues, submitProjectCards)
	}

	return c.Redirect(http.StatusMovedPermanently, "/")
}

func editProject(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/edit-project.html")

	id, _ := strconv.Atoi(c.Param("id"))

	var editProject = projectCards{}

	for i, data := range projectCardValues {
		if id == i {
			editProject = projectCards{
				ProjectNameDisplay:        data.ProjectNameDisplay,
				ProjectDescriptionDisplay: data.ProjectDescriptionDisplay,
			}
		}
	}

	data := map[string]interface{}{
		"projectDetail": editProject,
	}

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), data)
}

func submitEditedProject(c echo.Context) error {

	var startDateForm, endDateForm string
	var monthRemainder, dayRemainder int

	startDateForm = c.FormValue("startDate")
	endDateForm = c.FormValue("endDate")

	startDateParse, _ := time.Parse("2006-01-02", startDateForm)
	endDateParse, _ := time.Parse("2006-01-02", endDateForm)

	startDateFormat := startDateParse.Format("Jan 02, 2006")
	endDateFormat := endDateParse.Format("Jan 02, 2006")

	dayRemainder = int(endDateParse.Sub(startDateParse).Hours() / 24)
	if dayRemainder >= 30 {
		monthRemainder = dayRemainder / 30
		monthRemainderValue := strconv.Itoa(monthRemainder)
		id, _ := strconv.Atoi(c.Param("id"))
		editProject := projectCards{
			ProjectNameDisplay:        c.FormValue("projectNameDisplay"),
			ProjectDescriptionDisplay: c.FormValue("projectDescriptionDisplay"),
			Duration:                  monthRemainderValue + " months",
			StartDate:                 startDateFormat,
			EndDate:                   endDateFormat,
			ReactIcon:                 c.FormValue("ReactJs"),
			JsIcon:                    c.FormValue("Javascript"),
			NodeIcon:                  c.FormValue("NodeJs"),
			SocketIcon:                c.FormValue("SocketIO"),
		}
		projectCardValues = append(projectCardValues[:id+1], editProject)
	} else {
		dayRemainderValue := strconv.Itoa(dayRemainder)
		id, _ := strconv.Atoi(c.Param("id"))
		editProject := projectCards{
			ProjectNameDisplay:        c.FormValue("projectNameDisplay"),
			ProjectDescriptionDisplay: c.FormValue("projectDescriptionDisplay"),
			Duration:                  dayRemainderValue + " days",
			StartDate:                 startDateFormat,
			EndDate:                   endDateFormat,
			ReactIcon:                 c.FormValue("ReactJs"),
			JsIcon:                    c.FormValue("Javascript"),
			NodeIcon:                  c.FormValue("NodeJs"),
			SocketIcon:                c.FormValue("SocketIO"),
		}
		projectCardValues = append(projectCardValues[:id+1], editProject)
	}

	return c.Redirect(http.StatusMovedPermanently, "/")
}

func deleteProject(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	fmt.Println("Check")

	projectCardValues = append(projectCardValues[:id], projectCardValues[id+1:]...)

	return c.Redirect(http.StatusMovedPermanently, "/")
}

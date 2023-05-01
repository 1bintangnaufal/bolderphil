package main

import (
	"html/template"
	"net/http"
	// "strconv"

	"fmt"
	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.Static("/public", "public")

	// ini namanya routing
	e.GET("/", home)
	e.GET("/get-in-touch", getInTouch)
	e.GET("/add-a-new-project", addANewProject)
	e.POST("/add-a-new-project", submitNewProject)
	e.GET("/project-detail", projectDetail)

	e.Logger.Fatal(e.Start("localhost:8000"))
}

func home(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/index.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
		//ini untuk menampilkan error saat dijalankan di browser, melainkan terminal
	}

	return tmpl.Execute(c.Response(), nil)
}

func getInTouch(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/get-in-touch.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func addANewProject(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/my-project.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func projectDetail(c echo.Context) error {
	// id, _ := strconv.Atoi(c.Param("id")) // convert string to integer

	tmpl, err := template.ParseFiles("views/project-detail.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	// data := map[string]interface{}{
	// 	"id":      id,
	// 	"Title":   "Dumbways Mobile App",

	// 	"P1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sollicitudin tortor. Mauris nec ipsum eleifend, interdum magna eget, maximus enim. Nunc sit amet tempor leo, sodales pharetra nisi. Sed rutrum nulla ut ultrices imperdiet. Phasellus nec erat ac orci lacinia imperdiet. Nunc augue felis, pulvinar id ligula sit amet, cursus tincidunt mi. Duis aliquam enim id sem vulputate rhoncus. Proin volutpat metus a sem vestibulum, bibendum consequat ex ultricies. Sed egestas pretium efficitur.",

	// 	"P2": "Donec nisl risus, efficitur et nibh nec, rhoncus vestibulum tellus. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean dictum vulputate neque, quis pellentesque mi maximus et. Mauris non scelerisque quam. Fusce tellus orci, molestie at neque vel, feugiat aliquam lectus. Nam ut dictum orci, vel finibus mi. Nullam et justo non erat iaculis tincidunt. Donec nibh lorem, varius sed rutrum vel, ultrices at metus. Nulla sit amet est et neque consequat elementum. Fusce posuere dolor et nunc euismod tincidunt. Curabitur ullamcorper aliquam egestas. Etiam posuere pellentesque lacus vitae porta. Phasellus dapibus scelerisque elit facilisis arius. Etiam at enim ac tellus porta imperdiet.",

	// 	"P3": "Aenean eget ex sem. Nulla aliquam urna non velit eleifend, ac volutpat tortor sollicitudin. Donec elementum feugiat felis, sed lacinia turpis posuere congue. Quisque sem metus, porttitor id faucibus id, posuere vitae urna. Mauris quis ullamcorper est, in accumsan purus. Proin egestas felis et augue rhoncus, ac pulvinar velit semper. Suspendisse quis porta neque, nec semper libero. Proin quis porttitor ex. Pellentesque id massa id mauris facilisis laoreet. Proin facilisis ante ut pulvinar vehicula. Fusce sit amet felis et dui pulvinar porta sit amet sit amet tortor. Etiam sed erat et nisl pulvina imperdiet. Praesent in erat non nibh iaculis sodales vel quis enim.",
	// }

	return tmpl.Execute(c.Response(), nil)
}

func submitNewProject(c echo.Context) error {
	projectName := c.FormValue("projectName")
	projectDescription := c.FormValue("projectDescription")

	fmt.Println(projectName)
	fmt.Println(projectDescription)

	return c.Redirect(http.StatusMovedPermanently, "/")
}
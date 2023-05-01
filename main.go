package main //bebas penamaannya misal: package my-project | tujuan penamaan main agar menjadikan file go tersebut code yang akan diutamakan untuk di eksekusi terlebih dahulu

import (
	"net/http"
	"fmt"
	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	// routing

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, Cupcakke! Gulp Gulp Augh!")
	})

	e.GET("/more", func(c echo.Context) error {
		return c.String(200, "Wow daddy is so big. Augh!")
	})

	fmt.Println("Poosay started on port 5000")
	e.Logger.Fatal(e.Start("localhost:5000"))
}

// setiap program go wajib ada package yang main dan juga function yang main, baru package dan function yang lain-lain boleh ada
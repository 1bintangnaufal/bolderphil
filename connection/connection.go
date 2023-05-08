package connection

import (
	"context"
	"os"
	"fmt"
	"github.com/jackc/pgx/v5"
)

var Conn *pgx.Conn

func DatabaseConnect() {
	databaseUrl := "postgres://postgres:Engkar.K@12@localhost:5432/db_project"

	var err error
	Conn, err = pgx.Connect(context.Background(), databaseUrl)

	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
}
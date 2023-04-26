package main

import (
	controller "IPFS-Github-Storage-main/controller"
	service "IPFS-Github-Storage-main/service"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	app.Use(func(c *fiber.Ctx) error {
		c.Set("Access-Control-Allow-Origin", "*")
		c.Set("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT")
		c.Set("Access-Control-Allow-Headers", "Content-Type")
		if c.Method() == "OPTIONS" {
			return c.SendStatus(fiber.StatusOK)
		}
		return c.Next()
	})

	controller := controller.IpfsController{Svc: service.Service{}}

	app.Post("/ipfsprivate", controller.IpfsPrivate)
	app.Post("/ipfspublic", controller.IpfsPublic)

	app.Listen(":8080")

}

package controller

import (
	api_service "IPFS-Github-Storage-main/service"
	api_structures "IPFS-Github-Storage-main/structures"

	"github.com/gofiber/fiber/v2"
)

type IpfsController struct{ Svc api_service.Service }

func (cts *IpfsController) IpfsPrivate(c *fiber.Ctx) error {

	app := api_structures.IpfsPrivate{}
	if err := c.BodyParser(&app); err != nil {
		return err
	}

	ret := cts.Svc.IpfsPrivate(&app)

	return c.JSON(ret)
}

func (cts *IpfsController) IpfsPublic(c *fiber.Ctx) error {

	app := api_structures.IpfsPublic{}

	if err := c.BodyParser(&app); err != nil {
		return err
	}

	ret := cts.Svc.IpfsPublic(&app)

	return c.JSON(ret)
}

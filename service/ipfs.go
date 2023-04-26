package service

import (
	"IPFS-Github-Storage-main/block"
	"IPFS-Github-Storage-main/pulls"
	structures "IPFS-Github-Storage-main/structures"
	"log"
	"os"

	shell "github.com/ipfs/go-ipfs-api"
)

var (
	path = "./pullipfs/"
)

type ServiceI interface {
	IpfsPrivate(app *structures.IpfsPrivate) string
	IpfsPublic(app *structures.IpfsPublic) string
}
type Service struct{}

func (s *Service) IpfsPrivate(app *structures.IpfsPrivate) string {
	pulls.Pulssrepo(app.Url, app.Username, app.Token)
	err := encrypt(path, app.Key, app.Zipname)
	if err != nil {
		log.Fatal(err)
	}
	up := `./` + app.Zipname + `.zip`
	ret := ipfspull(up)
	return ret
}

func (s *Service) IpfsPublic(app *structures.IpfsPublic) string {
	os.OpenFile(path, os.O_RDONLY|os.O_CREATE, 0666)
	pulls.Pullrepo(app.Url)
	err := encrypt(path, app.Key, app.Zipname)

	if err != nil {
		log.Fatal(err)
	}
	up := `./` + app.Zipname + `.zip`
	ret := ipfspull(up)

	return ret
}

func ipfspull(paths string) string {
	sh := shell.NewShell("localhost:5001")

	cid, err := sh.AddDir(paths)

	if err != nil {
		log.Fatal(err)
	}
	ret := "https://ipfs.io/ipfs/" + cid

	return ret
}
func encrypt(paths string, key string, name string) error {
	err := block.Blockencrypt(paths, key, name)

	if err != nil {
		log.Fatal(err)
	}
	return err
}

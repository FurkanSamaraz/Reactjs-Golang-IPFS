package structures

type IpfsPublic struct {
	Url     string `json:"url"`
	Key     string `json:"key"`
	Zipname string `json:"zipname"`
}

type IpfsPrivate struct {
	Username string `json:"username"`
	Token    string `json:"token"`
	Url      string `json:"url"`
	Key      string `json:"key"`
	Zipname  string `json:"zipname"`
}

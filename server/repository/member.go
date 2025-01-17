package repository

import (
	"math/rand"

	"github.com/Doer-org/hack-camp_vol5_2022/server/db"
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain"
)

func NewMember(name string, comment string, lang string, github string, twitter string, question string, room string) domain.Member {
	db := db.NewDB()
	defer db.Conn.Close()

	member := domain.Member{
		Name:     name,
		Comment:  comment,
		Lang:     lang,
		Github:   github,
		Twitter:  twitter,
		Question: question,
		Room:     room,
	}
	db.Conn.Save(&member)
	return member
}

func GetAllMember(room string) (members []domain.Member) {
	db := db.NewDB()
	defer db.Conn.Close()

	db.Conn.Where("room = ?", room).Find(&members)
	return
}

func GetMemberByID(id int) (member domain.Member) {
	db := db.NewDB()
	defer db.Conn.Close()

	db.Conn.Where("id = ?", id).Find(&member)
	return
}

func GetRandomMember(room string) domain.Member {
	db := db.NewDB()
	defer db.Conn.Close()

	members := []domain.Member{}
	db.Conn.Where("room = ?", room).Find(&members)

	// マッチしたデータの長さ
	len := (int)(db.Conn.Where("room = ?", room).Find(&[]domain.Member{}).RowsAffected)
	return members[rand.Intn(len)]
}

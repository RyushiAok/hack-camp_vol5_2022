package response

import (
	"time"

	"github.com/Doer-org/hack-camp_vol5_2022/server/domain"
)

type RoomJSON struct {
	Id        string    `json:"id"`
	Name      string    `json:"name"`
	MaxCount  int       `json:"max_count"` //roomの最大人数
	Status    string    `json:"status"`    // roomのstatus
	CreatedAt time.Time `json:"created_at"`
}

func RoomToJSON(room domain.Room) RoomJSON {
	return RoomJSON{
		Id:        room.Id,
		Name:      room.Name,
		MaxCount:  room.MaxCount,
		Status:    room.Status,
		CreatedAt: room.CreatedAt,
	}
}

func RoomsToJSON(rooms []domain.Room) []RoomJSON {
	roomsJSON := []RoomJSON{}
	for _, room := range rooms {
		roomsJSON = append(roomsJSON, RoomToJSON(room))
	}
	return roomsJSON
}

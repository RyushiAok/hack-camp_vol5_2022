import * as RoomApi from '../api/room'
import * as MemberApi from '../api/member'
import {
  IPostCreateNewRoomInput,
  IGetRoomInfoInput,
  IPostCreateNewRoomOutput,
  IGetRoomInfoOutput
} from '../types/api/room'
import {
  IPostAddNewMemberInput,
  IGetRoomMembersInput,
  IPostAddNewMemberOutput,
  IGetRoomMembersOutput
} from '../types/api/member'
import * as E from 'fp-ts/Either'

interface IApis {
	createRoom: (input: IPostCreateNewRoomInput) => Promise<IPostCreateNewRoomOutput>;
	addNewMember: (input: IPostAddNewMemberInput) => Promise<IPostAddNewMemberOutput>;
	getRoomInfo: (input: IGetRoomInfoInput) => Promise<IGetRoomInfoOutput>;
	getRoomMembers: (input: IGetRoomMembersInput) => Promise<IGetRoomMembersOutput[]>;
	getRoomFinish: (input: string | undefined) => Promise<void>;
}

export const useMeetHackApi = (): IApis => {
  const createRoom = async (input: IPostCreateNewRoomInput): Promise<IPostCreateNewRoomOutput> => {
    return await RoomApi.postCreateNewRoom(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (createRoom)')
      } else {
        return ret.right
      }
    })
  }
  const addNewMember = async (input: IPostAddNewMemberInput): Promise<IPostAddNewMemberOutput> => {
    return await MemberApi.postAddNewMember(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (addNewMember)')
      } else {
        return ret.right
      }
    })
  }
  const getRoomInfo = async (input: IGetRoomInfoInput): Promise<IGetRoomInfoOutput> => {
    return await RoomApi.getRoomInfo(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (getRoomInfo)')
      } else {
        return ret.right
      }
    })
  }
  const getRoomMembers = async (input: IGetRoomMembersInput): Promise<IGetRoomMembersOutput[]> => {
    return await MemberApi.getRoomMembers(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (getRoomMembers)')
      } else {
        return ret.right
      }
    })
  }

  const getRoomFinish = async (input: string | undefined): Promise<void> => {
    return await RoomApi.getRoomFinish(input??"")().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (getRoomMembers)')
      } else {
        return ret.right
      }
    })
  }
  return { createRoom, addNewMember, getRoomInfo, getRoomMembers, getRoomFinish }
}

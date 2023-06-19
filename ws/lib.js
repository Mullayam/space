export const SplitString = (str, SplitAt) => {
  return str.split(`${SplitAt}`);
};
export const ConverTimeStringIntoSeconds = (value, unit) => {
  switch (unit) {
    case "min":
      return parseInt(value) * 60;
    case "hr":
      return parseInt(value) * 3600;
    default:
      return;
  }
};

export const GetPeopleArrayFromSpaceKey = (Spaces, spaceId, socketId) => {
  let Result = true;
  if (Object.values(Spaces).length > 0) {
    Spaces[spaceId].people.map((people) => {
      if (people.socketId === socketId) {
        Result = false;
        return;
      } else {
        Result = true;
        return;
      }
    });
    Result = false;
  }
  return Result;
};
export const DeleteClient = (Spaces, spaceId, socketId) => {};
export const HandleRecentSpaces = (RecentSpaces, UserId, spaceId) => {
  let SpaceRooms = [];
  let Result = true;
  if (RecentSpaces.length > 0) {
    RecentSpaces.map((recents) => {
      const Keys = Object.keys(recents).includes(UserId);
      if (Keys) {
        if (recents[UserId].includes(spaceId)) {
          SpaceRooms = recents[UserId];
        } else {
          SpaceRooms.push(...recents[UserId], spaceId);
        }
        Result = true;
      }
    });
    return { Result, SpaceRooms };
  }
  SpaceRooms.push(spaceId);
  RecentSpaces.push({
    [UserId]: SpaceRooms,
  });
  return { Result, SpaceRooms };
};

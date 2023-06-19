import instance from "@/helpers/instance";

export const GetSpaceDetails = async (spaceId: string) => {
  const { data } = await instance.get(
    `/server/handle-space?spaceId=${spaceId}`
  );
  return data;
};

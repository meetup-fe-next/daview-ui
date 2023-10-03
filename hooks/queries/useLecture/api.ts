// TODO: 더미 API 지우기

const getLectures = async (search: string) => {
  const res = await fetch(`http://localhost:8080?search=${search}`);

  return res.json();
};

export { getLectures };

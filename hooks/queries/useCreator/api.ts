// TODO: 더미 API 지우기

const getCreators = async (search: string) => {
  const res = await fetch(`http://localhost:8080/creators?search=${search}`);

  return res.json();
};

export { getCreators };

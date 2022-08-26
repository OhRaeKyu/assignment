export const API_END_POINT =
  'https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev';

const req = async (url) => {
  const res = await fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });

  return res;
};

export const fetchLanguages = async (keyword) =>
  req(`${API_END_POINT}/languages?keyword=${keyword}`);

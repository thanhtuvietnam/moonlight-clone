import axios from '../components/shared/axios';

export const getHomeMovies = async () => {
  const endpoints = {
    Trending: "/trending/movie/day",
    Popular: "/movie/popular",
    "Top Rated": "/movie/top_rated",
    Hot: "/trending/movie/day?page=2",
    Upcoming: "/movie/upcoming"
  };
  const responses = await Promise.all(Object.entries(endpoints).map((endpoint) => axios.get(endpoint[1])));
  // console.log(responses)

  const data = responses.reduce((final, current, index) => {
    final[Object.entries(endpoints)[index][0]] = current.data.results.map((item) => ({
      ...item,
      media_type: 'movie',
    }));
    return final;
  }, {});
    // console.log(data)
  return data;
};
export const getMoviesBannerInfo = async (movies) => {
  const detailRes = await Promise.all(movies.map((movie) => axios.get(`/movie/${movie.id}`)));

  const translationRes = await Promise.all(movies.map((movie) => axios.get(`/movie/${movie.id}/translations`)));
  // console.log(translationRes)

  const translations = translationRes.map((item1) =>
    item1.data.translations
      .filter((translation) => ['vi', 'fr', 'ja', 'pt', 'ru', 'es'].includes(translation.iso_639_1))
      .reduce((acc, element) => {
        if (element.iso_639_1 === 'vi') {
          return [element, ...acc];
        }
        return [...acc, element];
      }, [])
      .map((translation) => translation.data.title)
  );
  // console.log(translations)

  const translationOverViews = translationRes.map((item2) =>
    item2.data.translations
      .filter((translationOverView) => ['vi', 'fr', 'ja', 'pt', 'ru', 'es'].includes(translationOverView.iso_639_1))
      .reduce((acc1, element1) => {
        if (element1.iso_639_1 === 'vi') {
          return [element1, ...acc1];
        }
        return [...acc1, element1];
      }, [])
      .map((translationOverView) => translationOverView.data.overview)
  );
  //   console.log(translationOverViews)

  // translations will look like: [["bác sĩ kì lạ", "doctor strange", "doctor Strange tiếng nước nào đó"],["nhện xa nhà", "nhện xa nhà tiếng nước nào đó", "spider man fram from home", "spider man tiếng châu phi"],...]

  const genres = detailRes.map((item) => item.data.genres.filter((_, index) => index < 3));

  // genres will look like: [[{name: "action", id: 14}, {name: "wild", id: 19}, {name: "love", ket: 23}],[{name: "fantasy", id: 22}, {name: "science", id: 99}],...]

  // we have translations.length = genres.length, so let's merge these 2 arrays together
  // console.log(genres)
  return genres.map((genre, index) => ({
    genre,
    translation: translations[index],
    translationOverView: translationOverViews[index],
  }));
};

export const getHomeTvs = async () => {
  const endpoints = {
    Trending: '/trending/tv/day',
    Popular: "/tv/popular",
    "Top Rated": "/tv/top_rated",
    Hot: "/trending/tv/day?page=2",
    "On the air": "/tv/on_the_air"
  };
  const responses = await Promise.all(Object.entries(endpoints)?.map((endpoint) => axios.get(endpoint[1])));
  console.log(responses);
  const data = responses.reduce((final, current, index) => {
    final[Object.entries(endpoints)[index][0]] = current.data?.results?.map((item) => ({
      ...item,
      media_type: 'tv',
    }));
    return final;
  }, {});
  // console.log(data);
  return data;
};

export const getTVBannerInfo = async (tvs) => {
  const detailRes = await Promise.all(tvs.map((tv) => axios.get(`/tv/${tv.id}`)));

  const translationRes = await Promise.all(tvs.map((tv) => axios.get(`/tv/${tv.id}/translations`)));
  // console.log(translationRes)

  const translations = translationRes.map((item) =>
    item.data.translations
      .filter((translation) => ['vi', 'fr', 'ja', 'pt', 'ru', 'es'].includes(translation.iso_639_1))
      .reduce((acc, element) => {
        if (element.iso_639_1 === 'vi') {
          return [element, ...acc];
        }
        return [...acc, element];
      }, [])
      .map((translation) => translation.data.name)
  );
  // console.log(translations);
  const translationOverViews = translationRes.map((item2) =>
    item2.data.translations
      .filter((translationOverView) => ['vi', 'fr', 'ja', 'pt', 'ru', 'es'].includes(translationOverView.iso_639_1))
      .reduce((acc1, element1) => {
        if (element1.iso_639_1 === 'vi') {
          return [element1, ...acc1];
        }
        return [...acc1, element1];
      }, [])
      .map((translationOverView) => translationOverView.data.overview)
  );
  const genres = detailRes.map((item) => item.data.genres.filter((_, index) => index < 3));
  return genres.map((genre, index) => ({
    genre,
    translation: translations[index],
    translationOverView: translationOverViews[index],
  }));
};

export const getTrendingNow = async ()=>{
  return (await axios.get('/trending/all/day?page=2')).data.results
}
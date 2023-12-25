import axios from "./index";

interface IFetchVideoTimelineRecommendParams {
  offset?: number;
}
export const fetchVideoTimelineRecommend = (params:IFetchVideoTimelineRecommendParams = {}) => {
  return axios.get("/video/timeline/recommend", {
    params
  })
}


export const fetchPersonalizedMv = () => {
  return axios.get("/personalized/mv");
}

export const fetchPersonalFm = () => {
  return axios.get("/personal_fm")
}
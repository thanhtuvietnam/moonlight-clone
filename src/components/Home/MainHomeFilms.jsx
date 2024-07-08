import React from 'react'
import {BannerSlider} from '../Slider/BannerSlider'

const MainHomeFilms = ({
  data,
  dataDetail,
  isLoadingBanner,
  isLoadingSection
}) => {
  return (
    <>
      <BannerSlider
        films={data?.Trending}
        dataDetail={dataDetail}
        isLoadingBanner={isLoadingBanner}

      />
      <ul>
        
      </ul>
    </>
  )
}

export default MainHomeFilms
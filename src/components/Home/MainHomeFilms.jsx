import React from 'react'
import { Skeleton } from '../Common'
import SectionSlider from '../Slider/SectionSlider'
import BannerSlider from '../Slider/BannerSlider'

const MainHomeFilms = ({ data, dataDetail, isLoadingBanner, isLoadingSection }) => {
  return (
    <>
      <BannerSlider
        films={data?.Trending}
        dataDetail={dataDetail}
        isLoadingBanner={isLoadingBanner}
      />
      
      <ul className="flex flex-col gap-10 mt-12">
        {isLoadingSection ? (
          <>
            {new Array(2).fill("").map((_, index) => (
              <li key={index}>
                <Skeleton className="mb-3 max-w-[10%] h-8 rounded-md" />
                <SectionSlider films={undefined} />
              </li>
            ))}
          </>
        ) : (
          data &&
            Object.entries(data)
              .filter(section => section[0] !== "Trending")
              .map((section, index) => (
                <li key={index}>
                  <h2 className="text-xl text-white font-medium tracking-wider mb-3">
                    {section[0]}
                  </h2>
                  <SectionSlider films={section[1]} />
                </li>
              ))
        )}
      </ul>
    </>
  )
}
export default MainHomeFilms
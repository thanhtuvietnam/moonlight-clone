import React from 'react'
import {RightBarFilms} from '../Common/index.js'
import { useQuery } from '@tanstack/react-query'
import { getTrendingNow } from '../../services/home'

const TrendingNow = () => {
  const {isLoading,data,isError,error} =
  useQuery({
      queryKey: ['trending'],
      queryFn: getTrendingNow
    }
  )
  if(isError) return <div>ERRORL: ${error.message}</div>
  return (
    <RightBarFilms
      className='mt-7'
      films={data}
      name='Trending'
      limitNumber={2}
    />
  )
}

export default TrendingNow
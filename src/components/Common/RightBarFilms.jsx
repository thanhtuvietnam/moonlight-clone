import React from 'react';
import icons from '../../utils/icons';
import { Link, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { resizeImage } from '../shared/utils';

const { BsThreeDotsVertical, AiFillStar } = icons;

const RightBarFilms = ({ films, name, limitNumber = 20, isLoading, className = '' }) => {
    const navigate = useNavigate()
  return (
    <div className={className}>
      <p className='mb-6 text-xl font-medium flex justify-between items-center'>
        <span className='text-white'>{name}</span>
        <BsThreeDotsVertical size={20} />
      </p>
      <ul className='flex flex-col gap-5'>
        {isLoading ? (
          <div>loi</div>
        ) : (
          films.slice(0, limitNumber).map((item) => (
            <li key={item.id}>
              <Link to={item.media_type === 'movie' ? `/movie/${item.id}` : `/tv/${item.id}`}
               className="hover:brightness-75 transiton duration-300 flex gap-5 items-center"
              
              >
                <div className="shrink-0 max-w-[100px] w-full">
                  <LazyLoadImage src={resizeImage(item.poster_path, 'w154')} className="w-full h-full object-cover rounded-md" alt='poster' />
                </div>
                <div className='flex-grow'>
                  <p className='text-white mb-3 text-lg'>{item.title || item.name}</p>
                  <p className='mb-8'>{item.release_date || item.first_air_date}</p>
                  <div className='inline-flex gap-2 items-center px-3 py-[2px] rounded-full text-primary border border-primary text-sm'>
                    <span>{item.vote_average}</span>
                    <AiFillStar size={15} />
                  </div>
                </div>
              </Link>
            </li>
          ))
        )}
      </ul>
      <button
        onClick={()=>navigate('/explore')}
        className='bg-dark-lighten py-2 w-full rounded-full mt-7 hover:brightness-75 transition duration-300'
      >
        See More
      </button>
    </div>
  );
};

export default RightBarFilms;

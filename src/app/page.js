import Banner from '@/components/ui/banner/Banner';
import CategoryCard from '@/components/ui/categoryCard/CategoryCard';
import { getCategories } from '@/components/utils/getCategories';
import React from 'react';
import "../app/globals.css"

const HomePage = async () => {

  const categories = await getCategories()


  return (
    <div className='max-w-5xl mx-auto'>
      <Banner />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16'>
        {
          categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
        }
      </div>
    </div>
  );
};

export default HomePage;
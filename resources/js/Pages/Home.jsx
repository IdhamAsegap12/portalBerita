import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NewsList from '@/Components/NewsList';
import Paginator from '@/Components/paginator';


const Home = (props) => {
    console.log(props);
    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title='portal berita'/>
            <Navbar/>
            <div className='flex justify-center flex-col items-center lg:flex-row lg:flex-wrap lg:items-stretch gap-4'>
                <NewsList news={props.news.data}/>
            </div>
            <div className='flex justify-center my-5'>
                <Paginator meta={props.news.meta}/>
            </div>
        </div>
    )
}

export default Home;

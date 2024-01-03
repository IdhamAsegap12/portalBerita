const isNews = (news) => {
    return news.map((data, i) => {
                return (
                    <div key={i} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {data.title}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{data.description}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{data.author}</div>
                                <div className="badge badge-outline">{data.category}</div>
                            </div>
                        </div>
                    </div>
                )
            })
}

const noNews = () => {
    return(
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <h1 className="text-4xl font-bold">Tidak Ada Berita</h1>
        </div>
    )
}

const NewsList = ({news}) =>{
    if (news) {
        return isNews(news)
    } else {
        return noNews()
    }
}



export default NewsList;
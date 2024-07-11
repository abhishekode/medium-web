import React from 'react'

const YoutubeVideo = () => {
    const videos = [
        '<iframe width="410" height="350" src="https://www.youtube.com/embed/IIOw141Lwqg?si=3YNfNcxFW_AiScUT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        '<iframe width="410" height="350" src="https://www.youtube.com/embed/LnEmP7P9eok?si=h8HsTgjWrD2vKmHe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        '<iframe width="410" height="350" src="https://www.youtube.com/embed/E6t3-Q7gVwY?si=Q3OyNthrwlgrQcib" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        '<iframe width="410" height="350" src="https://www.youtube.com/embed/n9m_jPh5lfE?si=xr5O6q6LCYwSMHbh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        '<iframe width="410" height="350" src="https://www.youtube.com/embed/nT8aIbstYLg?si=VXqZY7eNuUVrJHcW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        '<iframe width="410" height="350" src="https://www.youtube.com/embed/qoxUpstX56o?si=1D3QAvyy9PIYCNyu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    ]
    return (
        <div className='py-28'>
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-2">
                    {videos.map((video, index) => {
                        return <div className='rounded-lg overflow-hidden' dangerouslySetInnerHTML={{ __html: video }} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default YoutubeVideo
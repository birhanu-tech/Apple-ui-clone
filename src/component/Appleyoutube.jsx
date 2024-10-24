import React,{useEffect, useState} from 'react'

function Appleyoutube() {
       const[youtubevideos, setyoutubevideos]= useState([]);
       useEffect(() => {
        fetch(
          "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyCmJLfKfNBhZ4ohIDelMxAQvtVoR8hRHWw"
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const youtubevideosdata = data.items;
             setyoutubevideos(youtubevideosdata);
            // setyoutubevideos(data.items);
          });

       },[]
    );


console.log(youtubevideos);

  return (
    <section className="videoinfoWrapper">
      <div className="allvideoWrappers">
        <div className="container">
          <div className="row justify-content-center text-center ">
            <div className="col-12">
              <div className="title-wrapper">
                <br />
                <h1>latest video</h1>
                <br />
              </div>
            </div>

            {youtubevideos?.map((singlevideo, i) =>{
               let vidId = singlevideo.id.videoId;
              let vidLink = `http://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singlevideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singlevideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoinfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singlevideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singlevideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
               return videoWrapper;
            })

            }
          </div>
        </div>
      </div>
    </section>
    // <div><h2>latest video</h2></div>
    // {youtubevideos.map((singlevideo) =>{
    //  let vidid = singlevideo.id.videoid;
    //  let vidlink =   `http://www.youtube.com/watch?v=${vidid}`;
    //  let videoWrapper = (
    //     <div key={vidid} className='col-sm-12 col-md-6 col-lg-4'>
    //         <div className='singlevideoWrapper'>
    //           <div className='videothumbnail'>
    //           <a href={vidlink} target='_blank'>
    //           <img src={singlevideo.snippet.thumbnails.high.url} />
    //           </a>
    //           </div>
    //           <div className='videoinfoWrapper'>
    //             <div className='videoTitle'>
    //             <a href={vidlink} target='_blank'>
    //               {singlevideo.snippet.title}
    //             </a>

    //             </div>
    //             <div className='videoDesc'>
    //               {singlevideo.snippet.description}
    //               </div>

    //           </div>
    //       </div>
    //     </div>

    //  )
    // })

    // }
  );
}

export default Appleyoutube

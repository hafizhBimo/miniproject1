import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import axios from "axios";

const items = [
  {
    src: "https://picsum.photos/id/123/1200/400",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://picsum.photos/id/456/1200/400",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://picsum.photos/id/678/1200/400",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
  {
    src: "https://picsum.photos/id/678/1200/400",
    altText: "Slide 4",
    caption: "Slide 4",
    key: 4,
  },
];

function BlogCarousel(args) {
  const [blogData, setBlogData] = useState([
    {
      id: 86,
      title: "hari terakhir",
      imageURL: "Public/Blog-1685258584412228000.jpeg",
      content: "besok ujian",
      videoURL: null,
      country: "indonesi",
      isPublished: false,
      isDeleted: false,
      createdAt: "2023-05-28T07:23:04.000Z",
      updatedAt: "2023-05-28T07:23:04.000Z",
      UserId: 80,
      CategoryId: 7,
      User: {
        username: "hafizhbimo+10",
        imgProfile: "Public/Avatar-80.jpeg",
      },
      Category: {
        id: 7,
        name: "Fiksi",
      },
      Blog_Keywords: [
        {
          id: 158,
          BlogId: 86,
          KeywordId: 49,
          createdAt: "2023-05-28T07:23:04.000Z",
          updatedAt: "2023-05-28T07:23:04.000Z",
          Keyword: {
            id: 49,
            name: "terakhir",
            createdAt: "2023-05-28T07:23:04.000Z",
            updatedAt: "2023-05-28T07:23:04.000Z",
          },
        },
      ],
    },
    {
      id: 77,
      title: "Haloo teman-teman",
      imageURL: "Public/Blog-1685236847032982865.jpeg",
      content: "hallo",
      videoURL: null,
      country: "indonesia",
      isPublished: false,
      isDeleted: false,
      createdAt: "2023-05-28T01:20:47.000Z",
      updatedAt: "2023-05-28T01:20:47.000Z",
      UserId: 86,
      CategoryId: 6,
      User: {
        username: "fabian+1",
        imgProfile: null,
      },
      Category: {
        id: 6,
        name: "Internasional",
      },
      Blog_Keywords: [
        {
          id: 143,
          BlogId: 77,
          KeywordId: 43,
          createdAt: "2023-05-28T01:20:47.000Z",
          updatedAt: "2023-05-28T01:20:47.000Z",
          Keyword: {
            id: 43,
            name: "hallo",
            createdAt: "2023-05-28T01:20:47.000Z",
            updatedAt: "2023-05-28T01:20:47.000Z",
          },
        },
      ],
    },
    {
      id: 76,
      title: "tes",
      imageURL: "Public/Blog-168523519723441667.png",
      content: "tes",
      videoURL: null,
      country: "tes",
      isPublished: false,
      isDeleted: false,
      createdAt: "2023-05-28T00:53:17.000Z",
      updatedAt: "2023-05-28T00:53:17.000Z",
      UserId: 86,
      CategoryId: 4,
      User: {
        username: "fabian+1",
        imgProfile: null,
      },
      Category: {
        id: 4,
        name: "Olahraga",
      },
      Blog_Keywords: [
        {
          id: 142,
          BlogId: 76,
          KeywordId: 42,
          createdAt: "2023-05-28T00:53:17.000Z",
          updatedAt: "2023-05-28T00:53:17.000Z",
          Keyword: {
            id: 42,
            name: "tes",
            createdAt: "2023-05-28T00:53:17.000Z",
            updatedAt: "2023-05-28T00:53:17.000Z",
          },
        },
      ],
    },
    {
      id: 73,
      title: "Hii, semangat frenn",
      imageURL: "Public/Blog-1685214833998465120.jpeg",
      content: "Jangan lupa minum biar gak dehidrasi",
      videoURL: "",
      country: "Indonesia",
      isPublished: false,
      isDeleted: false,
      createdAt: "2023-05-27T19:13:54.000Z",
      updatedAt: "2023-05-27T19:13:54.000Z",
      UserId: 109,
      CategoryId: 5,
      User: {
        username: "vanessaatest",
        imgProfile: "Public/Avatar-109.jpeg",
      },
      Category: {
        id: 5,
        name: "Kuliner",
      },
      Blog_Keywords: [
        {
          id: 138,
          BlogId: 73,
          KeywordId: 40,
          createdAt: "2023-05-27T19:13:54.000Z",
          updatedAt: "2023-05-27T19:13:54.000Z",
          Keyword: {
            id: 40,
            name: "putih",
            createdAt: "2023-05-27T19:13:54.000Z",
            updatedAt: "2023-05-27T19:13:54.000Z",
          },
        },
        {
          id: 137,
          BlogId: 73,
          KeywordId: 39,
          createdAt: "2023-05-27T19:13:54.000Z",
          updatedAt: "2023-05-27T19:13:54.000Z",
          Keyword: {
            id: 39,
            name: "air",
            createdAt: "2023-05-27T19:13:54.000Z",
            updatedAt: "2023-05-27T19:13:54.000Z",
          },
        },
        {
          id: 136,
          BlogId: 73,
          KeywordId: 38,
          createdAt: "2023-05-27T19:13:54.000Z",
          updatedAt: "2023-05-27T19:13:54.000Z",
          Keyword: {
            id: 38,
            name: "minum",
            createdAt: "2023-05-27T19:13:54.000Z",
            updatedAt: "2023-05-27T19:13:54.000Z",
          },
        },
      ],
    },
    {
      id: 72,
      title: "ara",
      imageURL: "Public/Blog-1685208030763165850.jpeg",
      content: "ara",
      videoURL: null,
      country: "ara",
      isPublished: false,
      isDeleted: false,
      createdAt: "2023-05-27T17:20:30.000Z",
      updatedAt: "2023-05-27T17:20:30.000Z",
      UserId: 108,
      CategoryId: 1,
      User: {
        username: "hanifrafif+20",
        imgProfile: "Public/Avatar-108.png",
      },
      Category: {
        id: 1,
        name: "Bisnis",
      },
      Blog_Keywords: [
        {
          id: 135,
          BlogId: 72,
          KeywordId: 37,
          createdAt: "2023-05-27T17:20:30.000Z",
          updatedAt: "2023-05-27T17:20:30.000Z",
          Keyword: {
            id: 37,
            name: "ara",
            createdAt: "2023-05-27T17:20:30.000Z",
            updatedAt: "2023-05-27T17:20:30.000Z",
          },
        },
      ],
    },
    {
      id: 64,
      title: "halo ges",
      imageURL: "Public/Blog-1685201641615206393.png",
      content: "permisi numpang ngetes2 ya ges",
      videoURL: null,
      country: "indonesia",
      isPublished: false,
      isDeleted: false,
      createdAt: "2023-05-27T15:34:01.000Z",
      updatedAt: "2023-05-27T15:34:01.000Z",
      UserId: 75,
      CategoryId: 6,
      User: {
        username: "hafizhbimo+9",
        imgProfile: null,
      },
      Category: {
        id: 6,
        name: "Internasional",
      },
      Blog_Keywords: [
        {
          id: 127,
          BlogId: 64,
          KeywordId: 34,
          createdAt: "2023-05-27T15:34:01.000Z",
          updatedAt: "2023-05-27T15:34:01.000Z",
          Keyword: {
            id: 34,
            name: "ges",
            createdAt: "2023-05-27T15:34:01.000Z",
            updatedAt: "2023-05-27T15:34:01.000Z",
          },
        },
      ],
    },
    {
      id: 61,
      title: "Muman lagi",
      imageURL: "Public/Blog-1685182223607346755.jpeg",
      content: "DOM in JS",
      videoURL: null,
      country: "bind",
      isPublished: false,
      isDeleted: false,
      createdAt: "2023-05-27T10:10:23.000Z",
      updatedAt: "2023-05-27T10:10:23.000Z",
      UserId: 95,
      CategoryId: 4,
      User: {
        username: "hanifrafif+23",
        imgProfile: null,
      },
      Category: {
        id: 4,
        name: "Olahraga",
      },
      Blog_Keywords: [
        {
          id: 124,
          BlogId: 61,
          KeywordId: 32,
          createdAt: "2023-05-27T10:10:23.000Z",
          updatedAt: "2023-05-27T10:10:23.000Z",
          Keyword: {
            id: 32,
            name: "bind",
            createdAt: "2023-05-27T10:10:23.000Z",
            updatedAt: "2023-05-27T10:10:23.000Z",
          },
        },
      ],
    },
    {
      id: 60,
      title: "muman again",
      imageURL: "Public/Blog-1685181897160559544.jpeg",
      content: "js array",
      videoURL: null,
      country: "bind",
      isPublished: false,
      isDeleted: false,
      createdAt: "2023-05-27T10:04:57.000Z",
      updatedAt: "2023-05-27T10:04:57.000Z",
      UserId: 95,
      CategoryId: 3,
      User: {
        username: "hanifrafif+23",
        imgProfile: null,
      },
      Category: {
        id: 3,
        name: "Teknologi",
      },
      Blog_Keywords: [
        {
          id: 123,
          BlogId: 60,
          KeywordId: 21,
          createdAt: "2023-05-27T10:04:57.000Z",
          updatedAt: "2023-05-27T10:04:57.000Z",
          Keyword: {
            id: 21,
            name: "val",
            createdAt: "2023-05-26T07:25:29.000Z",
            updatedAt: "2023-05-26T07:25:29.000Z",
          },
        },
      ],
    },
  ]);
  useEffect(() => {
    axios
      .get("https://minpro-blog.purwadhikabootcamp.com/api/blog")
      .then((response) => {
        setBlogData(response.data.result);
        console.log(response.data.result, "ini karosel");
      });
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = blogData?.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <div style={{maxWidth:"500px", maxHeight:"300px"}}>
          <img style={{ height:"100%"}}
            src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
            alt={item.altText}
          />
        </div>
        <CarouselCaption
          captionText={item.content}
          captionHeader={item.title}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default BlogCarousel;

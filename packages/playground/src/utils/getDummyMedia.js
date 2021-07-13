/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createDummyImageData({
  mimeType = 'image/jpeg',
  src,
  width,
  height,
  id,
  title,
}) {
  return {
    id: id,
    date_gmt: '2021-06-24T16:48:12',
    title: {
      raw: title,
    },
    featured_media: 0,
    media_source: '',
    featured_media_src: [],
    description: {
      raw: '',
    },
    alt_text: title,
    mime_type: mimeType,
    media_details: {
      width,
      height,
      sizes: {
        medium: {
          file: `${title}-200x300.jpeg`,
          width: 200,
          height: 300,
          mime_type: mimeType,
          source_url: src,
        },
        large: {
          file: `${title}-681x1024.jpeg`,
          width: 681,
          height: 1024,
          mime_type: mimeType,
          source_url: src,
        },
        thumbnail: {
          file: `${title}-150x150.jpeg`,
          width: 150,
          height: 150,
          mime_type: mimeType,
          source_url: src,
        },
        medium_large: {
          file: `${title}-768x1154.jpeg`,
          width: 768,
          height: 1154,
          mime_type: mimeType,
          source_url: src,
        },
        '1536x1536': {
          file: `${title}-1022x1536.jpeg`,
          width: 1022,
          height: 1536,
          mime_type: mimeType,
          source_url: src,
        },
        '2048x2048': {
          file: `${title}-1362x2048.jpeg`,
          width: 1362,
          height: 2048,
          mime_type: mimeType,
          source_url: src,
        },
        'post-thumbnail': {
          file: `${title}-1200x1804.jpeg`,
          width: 1200,
          height: 1804,
          mime_type: mimeType,
          source_url: src,
        },
        'web-stories-poster-portrait': {
          file: `${title}-640x853.jpeg`,
          width: 640,
          height: 853,
          mime_type: mimeType,
          source_url: src,
        },
        'web-stories-poster-landscape': {
          file: `${title}-853x640.jpeg`,
          width: 853,
          height: 640,
          mime_type: mimeType,
          source_url: src,
        },
        'web-stories-poster-square': {
          file: `${title}-640x640.jpeg`,
          width: 640,
          height: 640,
          mime_type: mimeType,
          source_url: src,
        },
        'web-stories-publisher-logo': {
          file: `${title}-96x96.jpeg`,
          width: 96,
          height: 96,
          mime_type: mimeType,
          source_url: src,
        },
        'web-stories-thumbnail': {
          file: `${title}-150x225.jpeg`,
          width: 150,
          height: 225,
          mime_type: mimeType,
          source_url: src,
        },
        full: {
          file: `${title}-scaled.jpeg`,
          width: 1703,
          height: 2560,
          mime_type: mimeType,
          source_url: src,
        },
      },
    },
    source_url: src,
  };
}

function createDummyVideoData({
  mimeType = 'video/mp4',
  src,
  mediaDetails,
  id,
  title,
  poster,
}) {
  return {
    id,
    date_gmt: '2021-07-13T05:37:02',
    title: {
      raw: title,
    },
    featured_media: 0,
    media_source: 'video-optimization',
    featured_media_src: poster,
    description: {
      raw: '',
    },
    alt_text: title,
    mime_type: mimeType,
    media_details: mediaDetails,
    source_url: src,
  };
}

function getDummyMedia() {
  return [
    createDummyImageData({
      mimeType: 'image/png',
      src: 'https://wp.stories.google/static/main/images/templates/fresh-and-bright/page1_bg-alt.png',
      width: 412,
      height: 732,
      id: 1,
      title: 'Fresh and Bright 1',
    }),
    createDummyImageData({
      src: 'https://wp.stories.google/static/main/images/templates/fresh-and-bright/page3_figure.jpg',
      width: 720,
      height: 844,
      id: 2,
      title: 'Fresh and Bright 2',
    }),
    createDummyImageData({
      src: 'https://wp.stories.google/static/main/images/templates/fresh-and-bright/page4_bg.png',
      width: 750,
      height: 1334,
      id: 3,
      title: 'Fresh and Bright 3',
    }),
    createDummyImageData({
      src: 'https://wp.stories.google/static/main/images/templates/fresh-and-bright/page5_figure.jpg',
      width: 750,
      height: 1079,
      id: 4,
      title: 'Fresh and Bright 4',
    }),
    createDummyImageData({
      src: 'https://wp.stories.google/static/main/images/templates/fresh-and-bright/page7_product1.jpg',
      width: 720,
      height: 900,
      id: 5,
      title: 'Fresh and Bright 5',
    }),
    createDummyImageData({
      src: 'https://wp.stories.google/static/main/images/templates/fresh-and-bright/page8_figure.jpg',
      width: 408,
      height: 544,
      id: 6,
      title: 'Fresh and Bright 6',
    }),
    createDummyImageData({
      src: 'https://wp.stories.google/static/main/images/templates/fresh-and-bright/page9_story1.jpg',
      width: 720,
      height: 405,
      id: 7,
      title: 'Fresh and Bright 7',
    }),
    createDummyImageData({
      src: 'https://wp.stories.google/static/main/images/templates/fresh-and-bright/page9_story2.jpg',
      width: 480,
      height: 720,
      id: 8,
      title: 'Fresh and Bright 8',
    }),
    createDummyImageData({
      src: 'https://wp.stories.google/static/main/images/templates/fresh-and-bright/page9_story3.jpg',
      width: 480,
      height: 720,
      id: 9,
      title: 'Fresh and Bright 9',
    }),
    createDummyImageData({
      src: 'https://wp.stories.google/static/main/images/templates/food-and-stuff/page1_bg.jpg',
      width: 1080,
      height: 1620,
      id: 10,
      title: 'Fresh and Bright 10',
    }),
    createDummyImageData({
      src: 'https://wp.stories.google/static/main/images/templates/food-and-stuff/page3_image1.jpg',
      width: 1080,
      height: 720,
      id: 11,
      title: 'Food and Stuff 1',
    }),
    createDummyImageData({
      src: 'https://wp.stories.google/static/main/images/templates/food-and-stuff/page5_bg.jpg',
      width: 731,
      height: 1300,
      id: 12,
      title: 'Food and Stuff 2',
    }),
    createDummyVideoData({
      src: 'https://stream.mux.com/OGTmBYTMkV7Ez601cRNpH6BP10102fQu9C00/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2MjYxNzgxMTIsImF1ZCI6InYiLCJzdWIiOiJPR1RtQllUTWtWN0V6NjAxY1JOcEg2QlAxMDEwMmZRdTlDMDAifQ.Jvddeah-XyF0AMmfYND-fFaIfgeDYW_cAuIVIXOrk2so_YalyMMAQ11YXHA1h11yKpLM-xa8xiNXazPqA0Suq1tfxHjJjEqiQOzSlPYd4visiPdTjUgT50FkwYdJrN0IldfXoS19yi3GyAd9McVFoSGCZ6qp8m_hgJ39y8FJJbOrvGtrzEvElpz1M8M1Dat3PF-BSLvFcTvCOlec9dipajxHG_2Xg-EE_vOqww6z81kC09evj5gu_A-Vz58Q-ebd08R47ybNejhE3rzMr1dCKgUikjkkQokPPQyrwVEy8zeZ68elax-ZRvDokZ2mTVPGvKIye6m_CQ-WVlG5XRjw7A',
      mediaDetails: {
        filesize: 1867215,
        mime_type: 'video/mp4',
        length: 12,
        length_formatted: '0:12',
        width: 720,
        height: 406,
        fileformat: 'mp4',
        dataformat: 'quicktime',
        audio: {
          dataformat: 'mp4',
          codec: 'ISO/IEC 14496-3 AAC',
          sample_rate: 48000,
          channels: 2,
          bits_per_sample: 16,
          lossless: false,
          channelmode: 'stereo',
        },
        created_timestamp: -2082844800,
        sizes: {},
      },
      id: 13,
      title: 'Story',
      poster: {
        src: 'https://image.mux.com/OGTmBYTMkV7Ez601cRNpH6BP10102fQu9C00/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ0aW1lIjowLCJleHAiOjMxNzE3MDYwNjg4MSwiYXVkIjoidCIsInN1YiI6Ik9HVG1CWVRNa1Y3RXo2MDFjUk5wSDZCUDEwMTAyZlF1OUMwMCJ9.WxHU2cpFdNqqiWF08KEv1g7barfbE_Nw4JDvVrtrQc9mVKiSZ6pEHpYl14NZeaBOf4Ep9MiomaegCVrD-UANhURlxWuHWFx5h7Msg74-q_ojjuZbLZtFPUdA0NA3_GTq5y0LDAeXijM7oENn_IkuDSY0fbRhRUVh-hYqCzw_OqMx7B1IxoOkkZUCHgkm9VnPdAMQRpmaanCHB8SHVRI_vIJo577DxLd88KBFP3UWK1XTvN5NYr0oPtwc82XMYUW4HrxZZTmxzLSZckxzwB7T5E6zAtXpo-xwd52yB1OUhoihlTqiOPWbntpvt9H4lFVRISLwsT39d1Tw80HF_X02eQ',
        width: 1920,
        height: 1080,
        generated: false,
      },
    }),
  ];
}

export default getDummyMedia;

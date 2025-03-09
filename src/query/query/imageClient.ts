const API_URL = 'https://sandbox-api-test.samyroad.com/graphql';

export async function fetchImages(cursor?: string) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query FetchImages($first: Int, $after: String) {
          images(first: $first, after: $after) {
            edges {
              node {
                picture
                id
                title
                liked
                likesCount
                createdAt
                author
                price
              }
              cursor
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      `,
      variables: {
        first: 20,
        after: cursor, 
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.data.images;
}


export async function likeImage(imageId: any) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation LikeImage($input: LikeImageInput!) {
          likeImage(input: $input) {
            image {
              id
              liked
              likesCount
            }
          }
        }
      `,
      variables: {
        input: {
          imageId: imageId,
        },
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result = await response.json();
  return result.data.likeImage.image;
}
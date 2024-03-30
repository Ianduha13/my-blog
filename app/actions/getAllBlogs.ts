import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI(
  {
    url: 'https://ianduhamel-tech.ghost.io',
    key: '4aec0de94b2be1f9182dcf0899',
    version: 'v5.0',
    makeRequest: async ({
      url, method, params, headers,
    }) => {
      const apiUrl = new URL(url)
      Object.keys(params).map((key) => apiUrl.searchParams.set(key, params[key]))

      return fetch(apiUrl.toString(), { method, headers })
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}, response data: ${await res.text()}`)
          }

          return { data: await res.json() }
        })
        .catch((error) => {
          console.error('Fetch error:', error)
        })
    },
  },
)

export async function getAllBlogs() {
  return api.posts.browse({ limit: 'all' }).catch((e) => { console.log(e) })
}
const BASE_FOLDER = 'estudio'

export function useCloudinaryImages(subfolder?: string) {
  const folder = subfolder ? `${BASE_FOLDER}/${subfolder}` : BASE_FOLDER
  return useFetch('/api/images', {
    query: { folder },
    key: `cloudinary-${folder}`,
  })
}

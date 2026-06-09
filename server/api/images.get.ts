export default defineEventHandler(async (event) => {
  const { folder } = getQuery(event)

  if (!folder) {
    throw createError({ statusCode: 400, message: 'folder query param is required' })
  }

  const cloudinary = useCloudinary()

  const result = await cloudinary.search
    .expression(`folder:${folder}`)
    .sort_by('created_at', 'desc')
    .max_results(100)
    .execute()

  return result.resources.map((img: any) => ({
    id: img.public_id,
    url: img.secure_url,
    width: img.width,
    height: img.height,
  }))
})

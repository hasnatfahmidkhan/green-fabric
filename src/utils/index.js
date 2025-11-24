import axios from "axios";

export const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_IMAGE_DEPLOY_SITE,
      formData
    );
    return data?.data?.display_url;
  } catch (error) {
    console.error("Image upload Error: ", error);
  }
};

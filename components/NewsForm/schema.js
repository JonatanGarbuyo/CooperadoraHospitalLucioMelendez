import * as yup from "yup"

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_IMAGE_RESOLUTION = 25 * 1000000; // 25 megapixels

export const newsFormSchema = yup.object().shape({
  title: yup.string().required('El título es obligatorio'),
  description: yup.string().required('La descripción es obligatoria'),
  image: yup
  .mixed()
  .test('required', 'Se requiere una imágen', (value) => {
    return value.length > 0
  })
  .test('fileType', 'Solo se permiten imágenes', (value) => {
    return value[0]?.type.startsWith('image/');
  })
  .test('fileSize', 'El tamaño del archivo es demasiado grande', (value) => {
    return (
      value[0]?.size <= MAX_FILE_SIZE 
    )
    })
  .test('imageResolution', 'La resolución de la imágen es demasiado grande', async (value) => {
      if (!value || !value[0]) {
        return true;
      }

      const file = value[0];
      const image = new Image();

      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          image.src = reader.result;
          image.onload = () => {
            const resolution = image.width * image.height;
            console.log(resolution)
            const isValid = resolution <= MAX_IMAGE_RESOLUTION;
            resolve(isValid);
          };
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }),
});
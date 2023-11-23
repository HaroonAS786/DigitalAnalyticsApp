import ImagePicker from 'react-native-image-crop-picker';

export const useMediaGroup = () => {

    const selectImage = async (type) => {
        
        if (type === 'camera') {
            return new Promise((res, rej) => {
                try {
                    ImagePicker.openCamera({
                        width: 1000,
                        height: 1000,
                        cropping: true,
                    }).then(image => {
                        res({ uri: image.path });
                    });

                } catch (error) {
                    rej(error)
                }
            })

        } else if (type === 'gallery') {
            return new Promise((res, rej) => {
                try {
                    ImagePicker.openPicker({
                        width: 1000,
                        height: 1000,
                        cropping: true,
                    }).then(image => {
                        res({ uri: image.path });
                    });
                } catch (error) {
                    rej(error)
                }
            })
        }
        else if (type === 'multiple') {
            return new Promise((res, rej) => {
                try {
                    ImagePicker.openPicker({
                        multiple: true,
                        compressImageQuality: 0.5,

                    }).then(async images => {
                        const result = [];
                        for await (const image of images) {
                            const img = await ImagePicker.openCropper({
                                mediaType: "photo",
                                path: image.path,
                                width: 1000,
                                height: 1000,
                            });
                            result.push(img.path);
                        }
                        res(result)
                    });

                } catch (error) {
                    rej(error)
                }
            })
        }
    };

    return {
        selectImage,
    }
}
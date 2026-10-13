

const imagePreload = (images:string[] = []):Promise<void[]> => {
    return Promise.all(
        images.map((imagePath) => {
            return new Promise<void>((resolve) => {
                const myimage = new Image();
                myimage.src = imagePath;
                myimage.onload = ()=> resolve();
                myimage.onerror = ()=> resolve();
            })
        })
    )
}

export default imagePreload


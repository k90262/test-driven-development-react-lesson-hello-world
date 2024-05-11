function mapChooser(location) {
    if (!location) {
        location = "default";
    }
    let imageName = location + ".jpg";
    return (imageName);
}

export default mapChooser;
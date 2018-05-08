const initData = () => (
    fetch('http://192.168.56.1/webservice/app/index.php')
        .then(res => res.json())
);
export default initData;
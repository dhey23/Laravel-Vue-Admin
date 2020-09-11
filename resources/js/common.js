import Axios from "axios";

export default {
    data() {
        return;
        {
        }
    },
    methods: {
        callApi(method, url, data0) {
            try {
                Axios({
                    method: method,
                    url: url,
                    data: data0
                });
            } catch (e) {
                return e.response;
            }
        }
    }
};

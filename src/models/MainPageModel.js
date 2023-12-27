import axios from "axios";

export default class MainPageModel {
  static async getCoins(page) {
    // Set the limit of the 100 coins coming from the API to 15.
    const params = {
      offset: (page - 1) * 15,
      limit: 15,
    };

    // Send an API request
    try {
      const res = await axios.get("https://api.coincap.io/v2/assets", {
        params,
      });
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
}

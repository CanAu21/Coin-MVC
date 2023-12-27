import millify from "millify";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DetailView = ({ model }) => {
  return (
    <div className="mt-3">
      <h3 className="text-center">
        <span>{model?.coin?.detail.symbol}</span>
        <span>{model?.coin?.detail.name}</span>
      </h3>

      <div className="row">
        <section className="col-md-3 d-flex flex-column gap-5 p-5 p-md-3">
          {model?.infoFields?.map((data) => (
            <div className="text-bg-light rounded shadow-lg text-center p-3">
              <span className="fs-2">{data.icon}</span>
              <h4>{data.label}</h4>
              <p>{millify(data.value)}</p>
            </div>
          ))}
        </section>

        <section className="col-md-9 d-flex flex-column gap-5 my-4">
          <Line data={model?.chartData} />
          <Bar data={model?.chartData} />
        </section>
      </div>
    </div>
  );
};

export default DetailView;

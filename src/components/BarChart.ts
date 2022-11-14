import { defineComponent, h, PropType } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartData, DefaultDataPoint } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartDataLabels);

export default defineComponent({
	name: 'BarChart',
	components: { Bar },
	props: {
		chartId: {
			type: String,
			default: 'bar-chart'
		},
		width: {
			type: Number,
			default: 400
		},
		height: {
			type: Number,
			default: 500
		},
		cssClasses: {
			default: '',
			type: String
		},
		chartData: {
			type: Object as PropType<ChartData<'bar', DefaultDataPoint<'bar'>, unknown>>,
		}
	},
	setup(props) {
		const chartOptions = {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				x: {
					display: true,
					grid: {
						lineWidth: 0,
					}
				},
				y: {
					display: false,
					grid: {
						lineWidth: 0,
					}
				}
			},
			plugins: {
				tooltip: {
					enabled: false,
				},
				legend: {
					display: false
				},
				datalabels: {
					color: 'white',
					font: {
						weight: 'bold'
					},
					formatter: function(value) {
						return parseFloat(value).toLocaleString('da-DK') + ',-';
					}
				}
			}
		}

		return () =>
			h(Bar, {
				chartData: props.chartData,
				chartOptions,
				chartId: props.chartId,
				width: props.width,
				height: props.height,
				cssClasses: props.cssClasses,
			})
	}
})
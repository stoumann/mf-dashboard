import { defineComponent, h, PropType } from 'vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, ChartData, CategoryScale, Plugin, DefaultDataPoint } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

export default defineComponent({
	name: 'LineChart',
	components: { Line },
	props: {
		chartId: {
            type: String,
            default: 'line-chart'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object as PropType<Partial<CSSStyleDeclaration>>,
            default: () => {}
        },
		chartData: {
			type: Object as PropType<ChartData<'line', DefaultDataPoint<'line'>, unknown>>,
		},
        plugins: {
            type: Array as PropType<Plugin<'line'>[]>,
            default: () => []
        }
	},
	setup(props) {
		const chartOptions = {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
                x: {
                    ticks: {
                      source: 'auto',
                      autoSkip: true,
                      color: "white",
                    },
					grid: {
						lineWidth: 0,
					}
				},
				y: {
					display: true,
                    ticks: {
                        color: "white",
                    },
					grid: {
						lineWidth: 0,
					}
				}
			},
            parsing: true,
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
			plugins: {
                decimation: {
                    enabled: true,
                    algorithm: 'min-max',
                },
				tooltip: {
					enabled: false,
				},
				legend: {
					display: false
				},
				datalabels: {
					color: 'transparent',
				},
			}
		}

		return () =>
			h(Line, {
				chartData: props.chartData,
				chartOptions,
				chartId: props.chartId,
				width: props.width,
				height: props.height,
				cssClasses: props.cssClasses,
			})
	}
})
import React from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            datasets: [
                {
                    data: [],
                    backgroundColor: [
                        '#ff6384',
                        '#ffcd56',
                        '#36a2eb',
                        '#fd6b19',
                        '#cc65fe',
                        '#33ff00',
                        '#dfaa00',
                        '#7aedff'
                    ]
                }
            ],
            labels: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/budget')
        .then(res => {
            var newState = this.state;
            console.log(res.data);
            for (var i = 0; i < res.data.myBudget.length; i++) {
                newState.datasets[0].data[i] = res.data.myBudget[i].budget;
                newState.labels[i] = res.data.myBudget[i].title;
            }
            this.setState(newState);
        });
    }

    render() {
        return(
            <section className="center">

                <div className="page-area">

                    <article>
                        <h1>Stay on track</h1>
                        <p>
                            Do you know where you are spending your money? If you really stop to track it down,
                            you would get surprised! Proper budget management depends on real data... and this
                            app will help you with that!
                        </p>
                    </article>
            
                    <article>
                        <h1>Alerts</h1>
                        <p>
                            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                        </p>
                    </article>

                    <article>
                        <h1>Results</h1>
                        <p>
                            People who stick to a financial plan, budgeting every expense, get out of debt faster!
                            Also, they to live happier lives... since they expend without guilt or fear... 
                            because they know it is all good and accounted for.
                        </p>
                    </article>
            
                    <article>
                        <h1>Chart</h1>
                        <p>
                            <Pie data={this.state} width={400} height={400} />
                        </p>
                    </article>

                </div>

            </section>
        );
    }


}

export default HomePage;
import propTypes from 'prop-types';



function Statistic({ stats, title }) {
 
    return (
        <section className="statistics">

            {title ? (<h2 className="title">{title}</h2>) :
                (<h2 className="title">There is no title</h2>)
            }

            

            <ul className="stat-list">

                {stats.map((stat) => <li key={stat.id} className="item">
                        <span className="label">{stat.label}</span>
                        <span className="percentage"> {stat.percentage}</span>
                    </li>
                )} 
                
               
            </ul>
        </section>
    );
};

Statistic.propTypes = {
    stats: propTypes.array.isRequired,
    title: propTypes.string,
}

export { Statistic };
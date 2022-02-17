function Sidebar() {
  return (
    <>
        <div className="widget">
            <span className="widget-title d-block">Categories</span>
            <div className="list-group-item d-flex justify-content-between align-items-center">
                North
                <span className="badge bg-light">9</span>
            </div>
            <div className="list-group-item d-flex justify-content-between align-items-center">
                Central
                <span className="badge">5</span>
            </div>
            <div className="list-group-item d-flex justify-content-between align-items-center">
                South
                <span className="badge">12</span>
            </div>
        </div>
        <div className="widget">
            <span className="widget-title">Latest Posts</span>
            <ul className="feed">
                <li>
                    <a href="#" className="feed-item">
                        <img src="https://images.unsplash.com/photo-1506741485568-47c278a3e70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHZpZXRuYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60" />
                        <div className="feed-item-content">
                            <h3>Top 10 places to travel in Viet Nam</h3>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="feed-item">
                        <img src="https://images.unsplash.com/photo-1570611318746-3a043ac8f256?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fHZpZXRuYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
                        <div className="feed-item-content">
                            <h3>Top 10 places to travel in Viet Nam</h3>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="feed-item">
                        <img src="https://images.unsplash.com/photo-1521347017846-273c8aae0fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fHZpZXRuYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
                        <div className="feed-item-content">
                            <h3>Top 10 places to travel in Viet Nam</h3>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="feed-item">
                        <img src="https://images.unsplash.com/photo-1541079606130-1f46216e419d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHZpZXRuYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
                        <div className="feed-item-content">
                            <h3>Top 10 places to travel in Viet Nam</h3>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div className="widget">
            <span className="widget-title">Tags</span>
            <div className="tag-cloud">
                <a href="#">Food</a>
                <a href="#">Stay</a>
                <a href="#">Transport</a>
                <a href="#">Play</a>
                <a href="#">People</a>
            </div>
        </div>
    </>
  )
}
export default Sidebar
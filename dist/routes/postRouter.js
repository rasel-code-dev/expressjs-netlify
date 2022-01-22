"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postRouter = (app) => {
    // netlify lambda add prefix  /.netlify/functions/server/api/posts
    app.get("/api/posts", (req, res, next) => {
        res.json({ posts: [
                { title: "Dummy post 1", id: 1 },
                { title: "Dummy post 2", id: 2 },
                { title: "Dummy post 3", id: 3 },
                { title: "Dummy post 4", id: 4 },
            ] });
    });
};
exports.default = postRouter;
module.exports = postRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdFJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy9wb3N0Um91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUMsRUFBRTtJQUd4QixrRUFBa0U7SUFFbEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxFQUFFO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUU7Z0JBQ2YsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7Z0JBQzlCLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDO2dCQUM5QixFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBQztnQkFDOUIsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7YUFDL0IsRUFBQyxDQUFDLENBQUE7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQUlELGtCQUFlLFVBQVUsQ0FBQTtBQUN6QixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQSJ9
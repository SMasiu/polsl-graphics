using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Shapes;

namespace ShapeDrawingApp
{
    public partial class MainWindow : Window
    {
        private readonly Random random = new Random();

        public MainWindow()
        {
            InitializeComponent();
        }

        private void DrawEllipse_Click(object sender, RoutedEventArgs e)
        {
            double offsetX = random.Next(0, 400);
            double offsetY = random.Next(0, 400);

            Ellipse ellipse = new Ellipse
            {
                Width = 100,
                Height = 50,
                Stroke = Brushes.Black,
                StrokeThickness = 2
            };

            Canvas.SetLeft(ellipse, 100 + offsetX);
            Canvas.SetTop(ellipse, 100 + offsetY);

            shapeCanvas.Children.Add(ellipse);
        }

        private void DrawLine_Click(object sender, RoutedEventArgs e)
        {
            double offsetX = random.Next(0, 400);
            double offsetY = random.Next(0, 400);

            Line line = new Line
            {
                X1 = 50 + offsetX,
                Y1 = 50 + offsetY,
                X2 = 200 + offsetX,
                Y2 = 200 + offsetY,
                Stroke = Brushes.Red,
                StrokeThickness = 3
            };

            shapeCanvas.Children.Add(line);
        }

        private void DrawPath_Click(object sender, RoutedEventArgs e)
        {
            double offsetX = random.Next(0, 400);
            double offsetY = random.Next(0, 400);

            Path path = new Path
            {
                Stroke = Brushes.Green,
                StrokeThickness = 2
            };

            PathGeometry pathGeometry = new PathGeometry();
            PathFigure pathFigure = new PathFigure
            {
                StartPoint = new Point(50 + offsetX, 100 + offsetY),
                IsClosed = true
            };

            pathFigure.Segments.Add(new LineSegment(new Point(150 + offsetX, 100 + offsetY), true));
            pathFigure.Segments.Add(new ArcSegment(new Point(200 + offsetX, 150 + offsetY), new Size(50 + offsetX, 50 + offsetY), 0, false, SweepDirection.Clockwise, true));
            pathFigure.Segments.Add(new BezierSegment(new Point(200 + offsetX, 200 + offsetY), new Point(100 + offsetX, 200 + offsetY), new Point(100 + offsetX, 150 + offsetY), true));

            pathGeometry.Figures.Add(pathFigure);
            path.Data = pathGeometry;

            shapeCanvas.Children.Add(path);
        }

        private void DrawPolygon_Click(object sender, RoutedEventArgs e)
        {
            double offsetX = random.Next(-100, 300);
            double offsetY = random.Next(-100, 300);

            Polygon polygon = new Polygon
            {
                Stroke = Brushes.Orange,
                StrokeThickness = 2,
                Fill = Brushes.Yellow
            };

            PointCollection points = new PointCollection();
            points.Add(new Point(100 + offsetX, 50 + offsetY));
            points.Add(new Point(200 + offsetX, 70 + offsetY));
            points.Add(new Point(220 + offsetX, 150 + offsetY));
            points.Add(new Point(180 + offsetX, 200 + offsetY));
            points.Add(new Point(80 + offsetX, 180 + offsetY));

            polygon.Points = points;

            shapeCanvas.Children.Add(polygon);
        }

        private void DrawRectangle_Click(object sender, RoutedEventArgs e)
        {
            double offsetX = random.Next(0, 200);
            double offsetY = random.Next(0, 200);

            Rectangle rectangle = new Rectangle
            {
                Width = 100,
                Height = 80,
                Stroke = Brushes.Blue,
                StrokeThickness = 2
            };

            Canvas.SetLeft(rectangle, 150 + offsetX);
            Canvas.SetTop(rectangle, 100 + offsetY);

            shapeCanvas.Children.Add(rectangle);
        }
    }
}
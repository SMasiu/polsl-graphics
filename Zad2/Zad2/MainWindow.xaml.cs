using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Shapes;

namespace WpfApplication1
{
    public partial class MainWindow : Window
    {
        private bool isDrawing = false;
        private Line selectedLine;
        private Point startPoint;
        private Point endPoint;

        public MainWindow()
        {
            InitializeComponent();
        }

        private void Canvas_MouseDown_1(object sender, MouseButtonEventArgs e)
        {
            if (e.ChangedButton == MouseButton.Left)
            {
                startPoint = e.GetPosition(paintSurface);
                isDrawing = true;
                selectedLine = new Line
                {
                    Stroke = SystemColors.WindowFrameBrush,
                    X1 = startPoint.X,
                    Y1 = startPoint.Y,
                    X2 = startPoint.X,
                    Y2 = startPoint.Y
                };
                paintSurface.Children.Add(selectedLine);
            }
        }

        private void Canvas_MouseMove_1(object sender, MouseEventArgs e)
        {
            if (isDrawing && e.LeftButton == MouseButtonState.Pressed)
            {
                endPoint = e.GetPosition(paintSurface);
                selectedLine.X2 = endPoint.X;
                selectedLine.Y2 = endPoint.Y;
            }
        }

        private void Canvas_MouseUp_1(object sender, MouseButtonEventArgs e)
        {
            isDrawing = false;
            selectedLine = null;
        }
    }
}
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Shapes;

namespace WpfApplication1
{
    public partial class MainWindow : Window
    {
        private Point currentPoint = new Point();
        private Brush currentBrush = Brushes.Black;
        private double currentThickness = 1.0;

        public MainWindow()
        {
            InitializeComponent();
            
            colorComboBox.SelectionChanged += ColorComboBox_SelectionChanged;
            thicknessSlider.ValueChanged += ThicknessSlider_ValueChanged;
        }

        private void Canvas_MouseDown_1(object sender, MouseButtonEventArgs e)
        {
            if (e.ButtonState == MouseButtonState.Pressed)
                currentPoint = e.GetPosition(this);
        }

        private void Canvas_MouseMove_1(object sender, MouseEventArgs e)
        {
            if (e.LeftButton == MouseButtonState.Pressed)
            {
                Line line = new Line();
                line.Stroke = currentBrush;
                line.StrokeThickness = currentThickness;

                line.X1 = currentPoint.X;
                line.Y1 = currentPoint.Y;
                line.X2 = e.GetPosition(this).X;
                line.Y2 = e.GetPosition(this).Y;
                currentPoint = e.GetPosition(this);
                paintSurface.Children.Add(line);
            }
        }

        private void ColorComboBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            ComboBoxItem selectedColor = (ComboBoxItem)colorComboBox.SelectedItem;
            currentBrush = new SolidColorBrush((Color)ColorConverter.ConvertFromString(selectedColor.Tag.ToString()));
        }

        private void ThicknessSlider_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
        {
            currentThickness = thicknessSlider.Value;
        }
    }
}
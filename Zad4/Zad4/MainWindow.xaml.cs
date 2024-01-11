using System;
using System.Windows;

namespace RGBtoHSVConverter
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void ConvertRGBtoHSV(object sender, RoutedEventArgs e)
        {
            if (int.TryParse(txtRed.Text, out int red) &&
                int.TryParse(txtGreen.Text, out int green) &&
                int.TryParse(txtBlue.Text, out int blue))
            {
                if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255)
                {
                    MessageBox.Show("RGB values must be between 0 and 255.");
                    return;
                }

                double r = red / 255.0;
                double g = green / 255.0;
                double b = blue / 255.0;

                double cmax = Math.Max(Math.Max(r, g), b);
                double cmin = Math.Min(Math.Min(r, g), b);
                double delta = cmax - cmin;

                double hue = 0;
                if (delta != 0)
                {
                    if (cmax == r)
                        hue = 60 * (((g - b) / delta) % 6);
                    else if (cmax == g)
                        hue = 60 * (((b - r) / delta) + 2);
                    else
                        hue = 60 * (((r - g) / delta) + 4);
                }

                double saturation = (cmax == 0) ? 0 : (delta / cmax);
                double value = cmax;

                txtResult.Text = $"HSV: Hue = {hue:F2}, Saturation = {saturation:F2}, Value = {value:F2}";
            }
            else
            {
                MessageBox.Show("Please enter valid integer values for RGB.");
            }
        }
    }
}
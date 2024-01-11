using Emgu.CV.CvEnum;
using Emgu.CV;
using System.Drawing;
using System.Windows;
using System.Windows.Media;
using System.Windows.Media.Imaging;

namespace Zad6
{
    public partial class MainWindow : Window
    {

        public MainWindow()
        {
            InitializeComponent();
            Mat image = CvInvoke.Imread("C:\\Users\\szymo\\Desktop\\image.jpg", ImreadModes.Color);

          
            float[,] kernelData = {
                { -1, -1, -1 },
                { -1, 9, -1 },
                { -1, -1, -1 }
            };
            Matrix<float> kernel = new Matrix<float>(kernelData);

          
            CvInvoke.Filter2D(image, image, kernel, new System.Drawing.Point(-1, -1));

            CvInvoke.Imshow("Image", image);
            CvInvoke.WaitKey(0);
        }
    }
}
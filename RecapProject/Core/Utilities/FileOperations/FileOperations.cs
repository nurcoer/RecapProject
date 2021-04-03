using Core.Entities;
using Core.Results.Utilities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Core.Utilities.FileOperations
{
    public class FileOperations 
    {
       public static  string AddFile(IFormFile file)
        {
            var sourcepath = Path.GetTempFileName();
            if (file.Length > 0)
            {
                using (var stream = new FileStream(sourcepath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
            }
            var result = NewPath(file);
            File.Move(sourcepath, result.newPath);
            return result.Path2.Replace("\\", "/");

        }

        public static IResult UpdateFile(string sourcePath, IFormFile file)
        {
            var result = NewPath(file);

            try
            {
                if (sourcePath.Length > 0)
                {
                    using (var stream = new FileStream(result.newPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                }

                File.Delete(sourcePath);
                return new SuccessResult();
            }
            catch 
            {
                return new ErrorResult();
            }

            
        }

        public IResult DeleteFile(string path)
        {
            try
            {
                File.Delete(path);
                return new SuccessResult();
            }
            catch 
            {
                return new ErrorResult();
            }
        }

        public static (string newPath, string Path2) NewPath(IFormFile file)
        {
            FileInfo ff = new FileInfo(file.FileName);
            string fileExtension = ff.Extension;

            string path = Environment.CurrentDirectory + @"\wwwroot\Images";
            var newPath = Guid.NewGuid().ToString() + "_" + DateTime.Now.Month + "_" + DateTime.Now.Day + "_" + DateTime.Now.Year + fileExtension;
            //string webPath = string.Format("/Images/{0}",newPath);

            string result = $@"{path}\{newPath}";
            return (result, $"{newPath}");
        }
    }
}
